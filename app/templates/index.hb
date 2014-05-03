<section class='section'>
  <h3>Forum</h3>

  <div class="large-5 columns">
    <ul>
      <li>
        {{#each post in model}}
          <dl>
            <dt>{{post.title}}</dt>
            <dd>{{post.description}}</dd>
          </dl>
        {{/each}}
      </li>
    </ul>
  </div>
  <div class="large-7 columns tab-content">
    <h3>Title</h3>
    <p>Description here.</p>
  </div>
</section>
