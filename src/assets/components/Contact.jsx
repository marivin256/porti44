function Contact () {
  return(
      <>
     <section className=" py-8 mb-3">
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div className="text-center">
        <h1
          className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
        >
          CONTACT ME
        </h1>
        
        <p className="my-4 text-xl text-white">
          I'd <span className="text-yellow-500 text-2xl">&#9829;</span> to Help!
        </p>
        <p className="text-yellow-500">"We like to create things with fun, open minded people, feel free to say Hello!" </p>
      </div>
    </div>
  </section>

  

<section className="mb-6">
    <div className="container m-auto max-w-2xl ">
      <div
        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border border-yellow-500 border-2 m-4 md:m-0"
      >
        <form action="https://formspree.io/f/movavrpj"
        method="POST"
        >
          

          <div className="mb-4">
            <label for="company" className="block text-gray-700 font-bold mb-2"
              >Your Name / Company Name</label>
            
            <input
              type="text"
              id="company"
              name="company"
              class="border rounded w-full py-2 px-3"
              placeholder="Company Name (Optional)."
            />
          </div>

          <div className="mb-4">
            <label
              for="contact_email"
              class="block text-gray-700 font-bold mb-2"
              >Your  Email</label>
            
            <input
              type="email"
              id="contact_email"
              name="email"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter Your Email..."
              required
            />
          </div>

          <div className="mb-4">
            <label
              for="contact_phone"
              class="block text-gray-700 font-bold mb-2"
              >Your Phone Contact</label>
            
            <input
              type="tel"
              id="contact_phone"
              name="Contact"
              class="border rounded w-full py-2 px-3"
              placeholder="Enter phone number"
            />
          </div>


          <div className="mb-4">
            <label
              for="company_description"
              class="block text-gray-700 font-bold mb-2">Send a message</label>
            
            <textarea
              id="company_description"
              name="Message"
              class="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Message....."
            ></textarea>
          </div>

          
          
          <div>
            <button
              className="text-black border border-2 border-yellow-500 hover:text-white hover:bg-yellow-600  font-bold py-2 px-4 rounded-lg w-full focus:outline-none focus:shadow-outline"
              type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>

  

  <footer className=" px-4 py-5">
    <div className="container-xl lg:container m-auto">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
        <div className="   border-r-2 border-slate-500 ">
          
            
              <div className="svj">
              <div className="text-yellow-600 font-bold text-xl my-2 "><svg  xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="16" cy="11" r="4"/><path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13"/></g></svg> </div>
              </div>
              <h3 className="text-slate-500 text-center">Kansanga-Ggaba</h3>
            

            
          
        </div>
        
        <div className="   border-r-2 border-slate-500 ">
          
            
              <div className="svj">
              <div className="text-yellow-600 font-bold text-xl my-2 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1024 1024"><path fill="currentColor" d="M262.2 37c37.4 51.6 82.002 118.197 133.602 199.598c13 22 11 48.4-5.8 79.4c-6.4 13-22.6 42.6-48.4 89.2c28.4 40 71.6 89.2 129.8 147.2s106.602 101.4 145.2 129.8c46.401-27.2 76.201-43.8 89.201-50.399c16.8-9 33-13.6 48.4-13.6c11.6 0 22 2.6 31 7.8c59.4 36.2 126.601 80.8 201.4 133.6c14.2 10.4 22.2 24.601 24.2 42.601c2 18.2-3.599 37.4-16.399 58.2c-6.4 9-16.8 22.2-31 39.8c-14.201 17.4-35.601 39.4-64.002 65.8s-51.6 39.802-69.8 39.802h-2c-136.6-5.4-305-107.801-504.4-307.201c-199.6-199.6-302-367.8-307.2-504.6c0-18 13.2-41.6 39.8-70.8c26.4-29 48.2-50 64.799-63c16.8-12.8 31-23.2 42.6-31c14.2-10.4 30.4-15.4 48.4-15.4c22.2 0 38.8 7.8 50.6 23.2zm-63.998 40.598c-27.2 19.4-52.603 41.198-76.603 64.998c-23.8 24-37.8 41.6-41.6 53.2c5.2 120.2 101 273.2 287.6 459.2c186.6 186 340 282.2 460 288.6c10.4-3.8 27.4-18 51.4-42.6s45.6-50.399 64.8-77.399c3.8-5.2 5.2-9.6 3.8-13.6c-77.4-54.2-142-97.4-193.8-129.801c-5.2 0-11.6 2-19.4 5.8c-11.6 6.4-40.6 22.6-87.2 48.4l-33 19.4l-33-21.4c-42.6-29.6-94.199-75.6-154.999-137.6c-60.6-60.6-105.8-112.4-135.6-155l-23.2-31l19.4-34.799c25.8-46.4 42-75.6 48.4-87.2c3.8-7.8 5.8-14.2 5.8-19.4c-46-73.401-88.599-138-127.398-193.6h-2c-5 0-9.6 1.4-13.4 3.8z"/></svg></div>
              </div>
              <h3 className="text-slate-500 text-center">+256757671763/+256761700498</h3>
              
            

            
          
        </div>
        
        <div className=" ">
          
              <div className="svj">
              <div className="text-yellow-600 font-bold text-xl my-2 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M18.333 2.5c.92 0 1.667.746 1.667 1.667v11.666c0 .92-.746 1.667-1.667 1.667H1.667C.747 17.5 0 16.754 0 15.833V4.167C0 3.247.746 2.5 1.667 2.5zM7.168 11.328l-4.91 4.852h15.325l-4.857-4.802L10 13.265zM18.64 7.292l-4.796 3.316l4.796 4.736zm-17.279.061v7.836l4.686-4.631zm16.956-3.532H1.698a.36.36 0 0 0-.25.086a.26.26 0 0 0-.085.222v1.62L10 11.656l8.644-5.965V4.199q.001-.2-.092-.292a.3.3 0 0 0-.234-.086"/></svg></div>
              </div>
              <h3 className="text-slate-500 text-center">marvintomusange@gmail.com</h3>
            </div>

            
          
      </div>
      </div>
    
  </footer>

  <section className="mb-6 " >
  <div className="flex gap-7 justify-center ">
      <div className="text-white text-2xl  hover:text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131c.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg></div>
      <div className="text-white text-2xl hover:text-yellow-500"><a href="https://wa.me/256757671763"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M23.328 19.177c-.401-.203-2.354-1.156-2.719-1.292c-.365-.13-.63-.198-.896.203c-.26.391-1.026 1.286-1.26 1.547s-.464.281-.859.104c-.401-.203-1.682-.62-3.203-1.984c-1.188-1.057-1.979-2.359-2.214-2.76c-.234-.396-.026-.62.172-.818c.182-.182.401-.458.604-.698c.193-.24.255-.401.396-.661c.13-.281.063-.5-.036-.698s-.896-2.161-1.229-2.943c-.318-.776-.651-.677-.896-.677c-.229-.021-.495-.021-.76-.021s-.698.099-1.063.479c-.365.401-1.396 1.359-1.396 3.297c0 1.943 1.427 3.823 1.625 4.104c.203.26 2.807 4.26 6.802 5.979c.953.401 1.693.641 2.271.839c.953.302 1.823.26 2.51.161c.76-.125 2.354-.964 2.688-1.901c.339-.943.339-1.724.24-1.901c-.099-.182-.359-.281-.76-.458zM16.083 29h-.021c-2.365 0-4.703-.641-6.745-1.839l-.479-.286l-5 1.302l1.344-4.865l-.323-.5a13.166 13.166 0 0 1-2.021-7.01c0-7.26 5.943-13.182 13.255-13.182c3.542 0 6.865 1.38 9.365 3.88a13.058 13.058 0 0 1 3.88 9.323C29.328 23.078 23.39 29 16.088 29zM27.359 4.599C24.317 1.661 20.317 0 16.062 0C7.286 0 .14 7.115.135 15.859c0 2.792.729 5.516 2.125 7.927L0 32l8.448-2.203a16.13 16.13 0 0 0 7.615 1.932h.005c8.781 0 15.927-7.115 15.932-15.865c0-4.234-1.651-8.219-4.661-11.214z"/></svg></a></div>
      <div className="text-white text-2xl hover:text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg></div>
      <div className="text-white text-2xl hover:text-yellow-500"><svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 448 512"><path fill="currentColor" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7a53.3 53.3 0 1 0-59.3-88.7m142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9.1-11.2.1s-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1.1 7.9.1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1s7.2 0 11.4.1c25.5.3 64.8.7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1.1-11.4c.3-25.5.7-64.9-6.5-83c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5a82 82 0 1 1-91.2 136.4a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64zm-91 293c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/></svg></div>
      <div className="text-white text-2xl hover:text-yellow-500"><a href="https://github.com/marivin256"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg></a></div>
      <div className="text-white text-2xl hover:text-yellow-500"></div>
  </div>
  <div className="text-slate-500 text-center mt-2">Copyright &#169; 2024 Marvitech,Ug</div>
  </section>



  
      </>
  )
}
export default Contact;