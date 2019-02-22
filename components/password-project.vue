<template>
  <div
    id="password-overlay"
    class="password-overlay">
    <div class="">
      <p style="font-size: 36px">Password Required</p>
      <p>Due to contractual restrictions, I am obligated to inform you that the work for this project was done while working for an pharmaceutical advertising agency.</p>
      <p>Please enter <code>{{ info.id }}</code> into the field below to continue on viewing <span class="project-title">{{ info.title }}</span>.</p>
      <form @submit.prevent="checkPassword">
        <input
          v-model="password"
          type="password">
        <button
          id="submit-password"
          class="submit"
          type="submit"/>
      </form>
      <p>Otherwise, <span
        class="link"
        @click="$router.go(-1)">click here to go back</span>, way back, back into time.</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PasswordProject',
    props: {
      info: {
        type: Object,
        required: true,
        twoWay: true,
        default: () => {}
      }
    },
    data() {
      return {
        password: '',
        myProps: this.info
      }
    },
    methods: {
      showCaseStudy: function() {
        let overlay = document.getElementById('password-overlay')
        overlay.classList.remove('show')
      },
      timeout: function(delay, args) {
        return new Promise(function(resolve) {
          setTimeout(resolve, delay, args);
        })
      },
      checkPassword: async function() {
        let submitBtn = document.getElementById('submit-password')
        submitBtn.classList.add('submitted')
        await this.timeout(750)
        submitBtn.classList.remove('submitted')
        if (this.password === this.myProps.id) {
          await this.timeout(425)
          submitBtn.classList.add('validated')
          await this.timeout(1000)
          this.showCaseStudy()
        } else {
          console.log("wrong password")
          submitBtn.classList.add('error')
          await this.timeout(1500)
          submitBtn.classList.remove('error')
        }
      }
    }
  }
</script>

<style lang="scss">

  .password-overlay {
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s .2s, opacity .2s linear;
    position: fixed;
    height: 100vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.95);
    color: $white;
    top: 0px;
    left: 0px;
    z-index: 1;
    &.show {
      visibility: visible;
      opacity: 1;
    }
    p {
      width: 80vw;
      .project-title {
        font-weight: bold;
      }
      .link {
        cursor: pointer;
        display: inline-block;
        text-decoration: underline;
      }
      code {
        font-family: monospace;
        font-weight: normal;
        background: rgba(255,255,255,.5);
        color: $dk-grey;
        padding: 2px 5px;
      }
    }
    form {
      padding: 0;
      margin: 0 0 25px 0;
      input[type=password] {
        font-size: 20px;
        margin: 0 0 25px 0;
        padding: 0 15px;
        width: 50%;
      }
      button {
        &.submit {
          outline:none;
          height: 40px;
          text-align: center;
          width: 175px;
          border-radius: 40px;
          background: rgba(0,0,0,.95);
          border: 2px solid $form-green;
          color: $form-green;
          text-shadow:0;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.25s ease;
          &:hover {
            color:$white;
            background: $form-green;
          }
          &:after {
            content: "View Project";
          }
        }
        &.submitted {
          width: 40px;
          border-color: #6c757d;
          border-left-color: $form-green;
          border-right-color: $form-green;
          animation: rotating 1s 0.25s linear infinite;

          &:after {
            content:"";
          }
          &:hover {
            color: $form-green;
            background: $white;
          }
        }
        &.validated {
          color: $white;
          background: $form-green;
          &:after {
            content:"Success";
            line-height: 0;
            padding: 0;
            margin: 0;
          }
        }
        &.error {
          color: $white;
          border: 2px solid $form-red;
          background: $form-red;
          &:after {
            content:"Error";
            line-height: 0;
            padding: 0;
            margin: 0;
          }
          &:hover {
            color: $white;
            background: $form-red;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    .password-overlay {
      p {
        width: 50vw;
      }
    }
  }

  @media (min-width: 992px) {
    .password-overlay {
      p {
        width: 50vw;
      }
    }
  }

  @media (min-width: 1200px) {
    .password-overlay {
      p {
        width: 30vw;
      }
    }
  }

  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
