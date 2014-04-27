<section class='section'>
  <h3>Forum</h3>

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
</section>
