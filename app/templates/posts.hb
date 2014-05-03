<section class='section'>
  <h3>Forum</h3>

  <div class="large-5 columns">
    <ul>
      <li>
        {{#each post in model}}
          <dl>
            <dt>{{#link-to 'post' post}}{{post.title}}{{/link-to}}</dt>
            <dd>{{post.description}}</dd>
          </dl>
        {{/each}}
      </li>
    </ul>
  </div>
  <div class="large-7 columns tab-content">
    {{outlet}}
  </div>
</section>
