console.log('my first blog');

const postsEl = document.querySelector('.cards');

axios.get('http://127.0.0.1:3004/posts')
    .then(resp => {
        console.log(resp.data);
        const posts = resp.data.data.post;
        console.log(posts);
        console.log(typeof posts);

        posts.forEach(elem => {
            const tagsMarkup = elem.tags.map(tag => `<li>${tag},</li>`).join('');
            const markup = `
            <div class="card mx-4 my-4" style="width: 18rem;">
                <img src="${elem.image}" alt="">
                <div class="card-body">
                    <h5 class="card-title">${elem.title}</h5>
                    <p class="card-text">${elem.content}</p>
                </div>
                <div class="list">
                    <ul class="d-flex flex-wrap">
                        ${tagsMarkup}
                    </ul>
                </div>
            </div>`
            postsEl.insertAdjacentHTML('afterbegin', markup);
        });

    })/* .catch(error => console.error(error)) */;