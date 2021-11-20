<template>
  <div>
    <q-separator />
    <div class="main">
      <div class="row q-col-gutter-md">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="title q-my-md">
            <div class="text-h5">About Me</div>
          </div>
          <div class="image">
            <img
              src="https://awcdn1.ahmad.works/writing/wp-content/uploads/2015/05/Author.jpg"
              alt=""
            />
          </div>
          <div class="text q-my-sm">
            <div class="text-body2">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </div>
          </div>
        </div>
        <div
          class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 tweet__section"
        >
          <div class="title q-my-md">
            <div class="text-h5">Tweets</div>
          </div>
          <div class="tweet q-my-md">
            <div class="text-body1">
              <q-icon name="fab fa-twitter" size="xs" class="q-mr-sm"></q-icon>
              <span class="text-bold"
                ><a href="/" class="a__about">Ahmad Works</a>
              </span>
              @AppleSupport If you need to know the version number, its 9.2.1
              (13D15)
            </div>

            <div class="duration">
              <div class="text-caption">
                <a href="/" class="a">about 2 months ago</a>
              </div>
            </div>
            <q-separator />
          </div>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
          <div class="title q-my-md">
            <div class="text-h5">Instagram</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  max-width: 970px;
  margin: 0 auto;
}

.text-h5 {
  font-size: 15px;
  font-weight: bold;
  color: #000;
}
img {
  border-radius: 15px;
  object-fit: cover;
  width: 100%;
  height: auto;
}
.body2 {
  font-size: 14px;
  line-height: 23px;
  color: #666;
}
.body1 {
  line-height: 20px;
  font-size: 13px;
  color: #222;
}

.fa-twitter {
  color: #32aadc;
}
.a__about {
  text-decoration: none;
  font-weight: 700;
  color: #333;
}
.a__about:hover {
  text-decoration: underline;
  font-weight: 700;
  color: #333;
}
.a {
  clear: both;
  display: inline-block;
  font-size: 11px;
  color: #8899a6;
  text-decoration: none;
}
.a:hover {
  clear: both;
  text-decoration: underline;
  display: inline-block;
  font-size: 11px;
  color: #8899a6;
}
</style>
