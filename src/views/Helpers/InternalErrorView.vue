<template>
  <div class="modal-inner error">
    <h1>Internal Error</h1>
    <p>We are sorry we are running into an bit of error.</p>
  </div>
</template>

<style>
.modal-inner.error::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  display: block;
  width: 10px;
  background-color: red;
}
</style>