<template>
  <div>
    <div class="row q-pa-md">
      <div class="col-xs-4 col-sm-3 col-md-2 col-lg-2 col-xl-2">
        <div class="image">
          <img
            src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2019/10/Author.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="col-xs-8 col-sm-9 col-md-10 col-lg-10 col-xl-10">
        <div class="text">
          <div class="text-h4 q-my-xs text-weight-bold">
            <a href="">John Doe</a>
          </div>
          <div class="text-body2">
            The names "John Doe" is used as placeholder names for a party whose
            true identity is unknown or must be withheld in a legal action,
            case, or discussion. The names are also used to refer to a corpse.
          </div>
        </div>
      </div>
    </div>

    <q-separator />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  border-radius: 50%;
  width: 70px;
  height: 70px;
  object-fit: contain;
}
.text-h4 {
  font-size: 15px;
}
a {
  text-decoration: none;

  color: #222;
}
a:hover {
  text-decoration: none;

  color: #222;
  border-bottom: 2px dotted #ccc;
}
.text-body2 {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  letter-spacing: 0.01786em;
}
</style>
