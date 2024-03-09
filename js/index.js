const handleCategory = async () => {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();
      const tabContainer = document.getElementById("tab-container");
      data.data.forEach((category) => {
          const div = document.createElement("div");
          div.innerHTML = `<a onclick="handleLoad('${category.category_id}')" class="tab ">${category.category}</a>   `;
          tabContainer.appendChild(div);
        });
      };
     
  
  
      const handleLoad = async (categoryId) => {
        console.log(categoryId);
        const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
        
        const data = await response.json();

      
        const cardContainer = document.getElementById("card-container");

        cardContainer.innerHTML = "";

        data.data.forEach((category) => {
          console.log(category);
          const div = document.createElement("div");
          div.innerHTML = `
          <div class="card w-70 bg-base-100 shadow-xl">
          <figure><img class="h-200px" src="${category?.thumbnail}" alt="" /></figure>
          <div class="card-body">
          <div class="flex justify-between">
          <div class="flex"> 
            <div>
            <img class="start first:w-10 rounded-full" src="${category?.authors[0]?.profile_picture}"/>
            </div>
            <div>
            <h4 class="card-title ">"${category?.title}"</h4>
            <div class="flex">
            <p class="ml-20px">"${category?.authors[0]?.profile_name}"</p>
            <img class="ml-20px" width="20" height="20" src="https://img.icons8.com/fluency/48/instagram-check-mark.png" alt=""/>
            </div>
           <div class="card-footer">
           <h3>Views: ${category?.others?.views}</h3>
           </div>
           </div>
         
          `;
          cardContainer.appendChild(div);
        });
      };
      

  handleCategory();
  handleLoad("1000");

  
 

  
  