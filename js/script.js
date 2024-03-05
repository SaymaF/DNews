const loadPosts = async (category) => {
    // const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    const data = await res.json();
    // console.log(data);
    const posts = data.posts;
    // posts are array. remember while trying to access.
    // console.log(posts);
    displayPosts(posts);
}



const displayPosts = posts => {

    const postContainer = document.getElementById('posts-container');

    posts.forEach(post => {

        const postCard = document.createElement('div')
        postCard.classList = `bg-gray-100 shadow-xl mb-[20px] lg:p-7 border  rounded-xl lg:w-[573px] w-[335px]`
        postCard.innerHTML = `
        <div class="flex">

            <div class="lg:w-[72px] m-4 rounded-lg">
                <img src="${post.image}" class=" rounded-lg shadow-2xl" />
            </div>
            <div>
                <!-- top ids -->
                    <div class="flex gap-5">
                <h3 class=" ">
                  # ${post.category}
                </h3>
                <div class="">
                  <h3>Author: ${post.author.name}</h3>
                </div>
                    </div>
                <!-- heading -->
                    <div>
                    <h1 class="pt-[12px] text-xl font-extrabold">
                        ${post.title}
                    </h1>
                    </div>
                    <!-- new things -->
                    <div class="">
                        <!-- top description -->
                <div class=" pb-4">
                    <p class="pt-[12px]">
                    ${post.description}
                    </p>
                </div>
                <hr class="border-t border-gray-400 my-4">

                <div class="flex justify-between">
                    <div class="flex gap-4">
                        <div class="flex gap-2 justify-center items-center">
                            <img class="h-5" src="images/Vector (1).png" alt="" />
                            <h3 class="description-color">${post.comment_count}</h3>
                        </div>
                        <div class="flex gap-2 justify-center items-center">
                            <img class="h-5" src="images/Vector (2).png" alt="" />
                            <h3 class="description-color">${post.view_count}</h3>
                        </div>
                        <div class="flex gap-2 justify-center items-center">
                            <img class="h-5" src="images/Vector (3).png" alt="" />
                            <h3 class="description-color text-[16px]">${post.posted_time} min</h3>
                        </div>
                        </div>
                        <div>
                        <img onclick="readMe()" src="images/Vector.png" alt="">
                        </div>
                </div>
                </div>
            </div>
        </div>`;
        // 4. append child
        postContainer.appendChild(postCard);

    });
}

const searchButton = () =>{
    const searchField = document.getElementById('input-field');
    const categoryName = searchField.value;
    console.log(categoryName)
    loadPosts(categoryName)
}


loadPosts()