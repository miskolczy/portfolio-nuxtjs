<template>

  <div>

    <header id="top" class="intro">
      <!--<div class="logo content uppercase">
       <a href="#about"><h1><span>Jonathan</span><span>Miskolczy</span></h1></a>-->
          <!-- <a href="#about" class="title"><h1>Jonathan</h1><h1>Miskolczy</h1></a>
      </div>-->

      <h1 class="uppercase headline logo">Miskolczy</h1>
      <div class="about justified-text">
        <p>Hello, my name is Jonathan Miskolczy, I am a former Bachelor of Arts student at the <span class="uppercase">FHNW HGK</span> in Basel, Switzerland. I have studied visual communication with deeper focus on typography.</p>
      </div>
            <div class="gallery thumbnail custom-scrollbar"> 
        <nuxt-link v-for="(project, pIdx) of projects" :key="pIdx" :to="'#'+project.slug" exact>
          <figure>
            <img :src="require(`~/assets/images/${project.thumbnail}`)" :alt="project.alt" loading="lazy" width="2" height="3" />
            <figcaption class="uppercase"><p>{{ project.title }}</p></figcaption>
          </figure>
        </nuxt-link>
      </div>

      <h2 class="headline nav">
        
        <a href="#works">Selected works</a>
        <br>& <a href="#contact">Contact<br>details</a>
      </h2>
    </header>



    <main id="works">
                <div class="top title"><a href="#top" class="uppercase">JM</a></div>

      <div class="project" :id="project.slug" v-for="(project, pIdx) of projects" :key="pIdx">
        <div class="title">
          <h3 class="uppercase">{{ project.title }}</h3>
          <h4 class="uppercase">{{ project.category }}</h4>
        </div>

        <article>
          <nuxt-content class="justified-text" :document="project" />
        </article>
        <div class="gallery custom-scrollbar">    
          <img v-for="(image, Idx) in project.gallery" :key="Idx" :src="require(`~/assets/images/${image}`)" loading="lazy" />
        </div>
      </div>


    </main>

    <footer>

      <h5 class="headline"><a href="#top">Back toTop</a></h5>
      <address id="contact">
        <h5 class="uppercase">Impressum</h5>
        <h6 class="uppercase">Concept, Design and Typeface<br>
        Jonathan Miskolczy</h6>
        <p>Leopoldstraße 9, 79576 Weil a. Rhein<br>
        mail@miskolczy.net</p>
        <p>©</p>
      </address>

        <div class="title">
        <a href="https://www.linkedin.com/in/miskolczy"><span class="uppercase">linkedin.com/</span><wbr>in/miskolczy</a>
        <a href="https://medium.com/@miskolczy"><span class="uppercase">medium.com/</span><wbr>@miskolczy</a>
      </div>
    </footer>
    
  </div>

</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content('portfolio', params.slug)
    .sortBy('title')
    .fetch();
 
  return {
    projects
    }
  },
  
  methods: {
    variableWidthAxis() {
      var column = document.getElementById("top");
      var container = document.querySelector("body");
      const maxWidthAxis = 200;
      const minWidthAxis = 50;
      const maxColumnWidth = 800;
      const minColumnWidth = 500;
      const width = column.clientWidth;
      const percent = (width - minColumnWidth) / (maxColumnWidth - minColumnWidth);
      const scale = percent * (maxWidthAxis - minWidthAxis) + minWidthAxis;
      const newWidth = width > maxColumnWidth ? maxWidthAxis : width < minColumnWidth ? minWidthAxis : scale;
      container.style.setProperty("--width-axis", newWidth.toString());
    }
  },
  mounted: function() {
    this.variableWidthAxis
    window.addEventListener('resize', this.variableWidthAxis);
    window.addEventListener('load', this.variableWidthAxis);
  },
  unmounted() {
    window.removeEventListener('resize', this.variableWidthAxis);
    window.addEventListener('load', this.variableWidthAxis);

  },
}
</script>