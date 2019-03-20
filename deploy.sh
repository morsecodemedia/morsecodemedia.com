#!/usr/bin/env bash
branch="$(git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/')"
if [ "$branch" = "master" ]; then
  read -r -p "Deploy to production? " input
  case "$input" in
    [yY][eE][sS]|[yY])
      if yarn build; then
        rsync -ae ssh --progress --delete --chmod=u+rw,g+rw,o+r --exclude-from 'exclude-list.txt' ./ morsecodemedia:/var/www/www.morsecodemedia.com/
        ssh morsecodemedia "pm2 restart 'morsecodemedia prod'"
      else
        echo "Failed to build site. Aborting"
      fi
      ;;
    *)
      exit 0
      ;;
  esac
else
  read -r -p "Deploy to stage? " input
  case "$input" in
    [yY][eE][sS]|[yY])
      if yarn build; then
        rsync -ae ssh --progress --delete --chmod=u+rw,g+rw,o+r --exclude-from 'exclude-list.txt' ./ morsecodemedia:/var/www/stage.morsecodemedia.com/
        ssh morsecodemedia "pm2 restart 'morsecodemedia stage'"
      else
        echo "Failed to build site. Aborting"
      fi
      ;;
    *)
      exit 0
      ;;
  esac
fi
