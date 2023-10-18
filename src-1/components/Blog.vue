<template>
	<body>
		<section class="navigation-site center">
			<span class="navigation-site_text-logo"><img class="navigation-site_logo" src="../assets/imgblog/img/Logo.jpg"
					alt="" />Interno</span>
			<nav class="navigation-site_link">
				<a href="/vue1/index.html">Home</a>
				<a href="/vue2/article&news.html">Project</a>
				<a href="/vue3-1/articles.html">Blog</a>
			</nav>
		</section>
		<section class="art-news center">
			<div class="bakgraungPhoto"></div>
		</section>
		<!-- _______________________________________article-block -->
		<div id="app" class="article-block center">
			<div>
				<div class="content-block" v-for="item in currentArticle" :key="item.id">
					<h2 class="article-title">{{ item.article_title }}</h2>
					<img class="content-block-img" :src="item.content_block_img" alt="">
					<div class="inline-date">
						<p class="date-article">{{ item.date_article }}</p>
						<p class="navigation-home-interior">{{ item.navigation_home_interior }}</p>
					</div>
					<p class="article-text1">{{ item.article_text1 }}</p>
					<p class="article-text">{{ item.article_text }}</p>
					<img class="quote" :src="item.quote" alt="">
					<h2 class="article-title">{{ item.article_title2 }}</h2>
					<p class="article-text">{{ item.article_text2 }}</p>
					<p class="sprint-text"> <img class="sprint-pict" :src="item.sprint_pict" alt="">{{ item.sprint_text }}
					</p>
					<p class="sprint-text"> <img class="sprint-pict" :src="item.sprint_pict2" alt="">{{ item.sprint_text2 }}
					</p>
					<p class="sprint-text"> <img class="sprint-pict" :src="item.sprint_pict3" alt="">{{ item.sprint_text3 }}
					</p>
					<img class="content-block-img" :src="item.content_block_img2" alt="">
					<p class="article-text">{{ item.article_text2 }}</p>
				</div>
			</div>
			<div class="content-tags">
				<p class="tag-text">Tags</p>
				<button class="tag-buttmob" @click="changeArticle(item.id)" v-for="item in buttoms" :key="item.id">{{
					item.namebuttom }}</button>
			</div>
		</div>

		<!-- _____________________________footer -->
		<footer class="footer_content center">
			<div class="footer_logo">
				<span class="footer_text-logo"><img class="footer-site_logo" src="../assets/imgblog/img/Logo1.svg"
						alt="" />Interno</span>
				<p class="footer_logo_slogan">It is a long established fact that a reader will be distracted lookings.</p>
				<svg class="logo-twiter" width="19" height="16" viewBox="0 0 19 16" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.6367 4.59375C17.3398 4.06641 17.9727 3.43359 18.4648 2.69531C17.832 2.97656 17.0938 3.1875 16.3555 3.25781C17.1289 2.80078 17.6914 2.09766 17.9727 1.21875C17.2695 1.64062 16.4609 1.95703 15.6523 2.13281C14.9492 1.39453 14 0.972656 12.9453 0.972656C10.9062 0.972656 9.25391 2.625 9.25391 4.66406C9.25391 4.94531 9.28906 5.22656 9.35938 5.50781C6.30078 5.33203 3.55859 3.85547 1.73047 1.64062C1.41406 2.16797 1.23828 2.80078 1.23828 3.50391C1.23828 4.76953 1.87109 5.89453 2.89062 6.5625C2.29297 6.52734 1.69531 6.38672 1.20312 6.10547V6.14062C1.20312 7.93359 2.46875 9.41016 4.15625 9.76172C3.875 9.83203 3.52344 9.90234 3.20703 9.90234C2.96094 9.90234 2.75 9.86719 2.50391 9.83203C2.96094 11.3086 4.33203 12.3633 5.94922 12.3984C4.68359 13.3828 3.10156 13.9805 1.37891 13.9805C1.0625 13.9805 0.78125 13.9453 0.5 13.9102C2.11719 14.9648 4.05078 15.5625 6.16016 15.5625C12.9453 15.5625 16.6367 9.97266 16.6367 5.08594C16.6367 4.91016 16.6367 4.76953 16.6367 4.59375Z"
						fill="#292F36" />
				</svg>
				<svg class="logo_in" width="17" height="16" viewBox="0 0 17 16" fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
						fill="#292F36" />
				</svg>
			</div>
			<div class="footer_pages">
				<h2 class="footer_page_title">Pages</h2>
				<a class="footer_pages_link" href="">Home</a>
				<a class="footer_pages_link" href="">Project</a>
				<a class="footer_pages_link" href="">Blog</a>
			</div>
			<div class="footer_clear"></div>
			<div class="footer_contact">
				<h2 class="footer_contact_title">Contact</h2>
				<p class="footer_contact_adress">55 East Birchwood Ave. Brooklyn, New York 11201</p>
				<a class="footer_contact_mail" href=" mailto:contact@interno.com">contact@interno.com</a>
				<a class="footer_contact_tel" href=" tel:(123) 456 - 7890">(123) 456 - 7890</a>
			</div>
		</footer>
	</body>
</template>
<!-- <script src="../assets/js/sort.js"></script> -->
<script>
export default {
	data() {
		return {
			articles: [
				{
					id: 'Kitchen',
					article_title: 'Let’s Get Solution for Building Construction Work',
					content_block_img: require('../assets/imgblog/img/Photo1.jpg'),
					date_article: '26 December,2022',
					navigation_home_interior: 'Interior / Home / Decore',
					article_text1:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					quote: require('../assets/imgblog/img/Quotes.jpg'),
					article_title2: 'Design sprints are great',
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text1:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
					sprint_pict1: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/3.png'),
					content_block_img2: require('../assets/imgblog/img/Photo2.jpg'),
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
				},
				{
					id: 'Bedroom',
					article_title: 'Let’s Get Solution for Building Bedroom',
					content_block_img: require('../assets/imgblog/img/Photo3.jpg'),
					date_article: '26 December,2022',
					navigation_home_interior: 'Interior / Home / Decore',
					article_text1:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					quote: require('../assets/imgblog/img/Quotes.jpg'),
					article_title2: 'Design sprints are great',
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text1:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
					sprint_pict1: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/3.png'),
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict3: require('../assets/imgblog/img/3.png'),
					content_block_img2: require('../assets/imgblog/img/Photo6.jpg'),
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
				},
				{
					id: 'Building',
					article_title: 'Let’s Get Solution for Building home',
					content_block_img: require('../assets/imgblog/img/Photo7.jpg'),
					date_article: '26 December,2022',
					navigation_home_interior: 'Interior / Home / Decore',
					article_text1:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					quote: require('../assets/imgblog/img/Quotes.jpg'),
					article_title2: 'Design sprints are great',
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text1:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
					sprint_pict1: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/3.png'),
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict3: require('../assets/imgblog/img/3.png'),
					content_block_img2: require('../assets/imgblog/img/Photo8.jpg'),
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
				},
				{
					id: 'Architecture',
					article_title: 'Let’s Get Solution for Architecture',
					content_block_img: require('../assets/imgblog/img/Photo9.jpg'),
					date_article: '26 December,2022',
					navigation_home_interior: 'Interior / Home / Decore',
					article_text1:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					quote: require('../assets/imgblog/img/Quotes.jpg'),
					article_title2: 'Design sprints are great',
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text1:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
					sprint_pict1: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/3.png'),
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict3: require('../assets/imgblog/img/3.png'),
					content_block_img2: '',
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
				},
				{
					id: 'Kitchen Planning',
					article_title: 'Let’s Get Solution for Architecture',
					content_block_img: require('../assets/imgblog/img/Photo10.jpg'),
					date_article: '26 December,2022',
					navigation_home_interior: 'Interior / Home / Decore',
					article_text1:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					quote: require('../assets/imgblog/img/Quotes.jpg'),
					article_title2: 'Design sprints are great',
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text1:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
					sprint_pict1: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/3.png'),
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict3: require('../assets/imgblog/img/3.png'),
					content_block_img2: require('../assets/imgblog/img/Photo11.jpg'),
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
				},
				{
					id: 'Bathroom',
					article_title: 'Let’s Get Solution for Kitchen Planning',
					content_block_img: require('../assets/imgblog/img/Photo12.jpg'),
					date_article: '26 December,2022',
					navigation_home_interior: 'Interior / Home / Decore',
					article_text1:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					quote: require('../assets/imgblog/img/Quotes.jpg'),
					article_title2: 'Design sprints are great',
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text1:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
					sprint_pict1: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/3.png'),
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict3: require('../assets/imgblog/img/3.png'),
					content_block_img2: require('../assets/imgblog/img/Photo13.jpg'),
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
				},
			],
			currentArticle: [
				{
					id: 'Kitchen',
					article_title: 'Let’s Get Solution for Building Construction Work',
					content_block_img: require('../assets/imgblog/img/Photo1.jpg'),
					date_article: '26 December,2022',
					navigation_home_interior: 'Interior / Home / Decore',
					article_text1:
						"Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.",
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					quote: require('../assets/imgblog/img/Quotes.jpg'),
					article_title2: 'Design sprints are great',
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text1:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered',
					sprint_pict1: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/3.png'),
					content_block_img2: require('../assets/imgblog/img/Photo2.jpg'),
					article_text:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_text:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict: require('../assets/imgblog/img/1.png'),
					sprint_text2:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict2: require('../assets/imgblog/img/2.png'),
					sprint_text3:
						'Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
					sprint_pict3: require('../assets/imgblog/img/3.png'),
					content_block_img3: require('../assets/imgblog/img/Photo2.jpg'),
					article_text2:
						'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
				},],
			buttoms: [
				{ id: 'Kitchen', namebuttom: 'Kitchen' },
				{ id: 'Bedroom', namebuttom: 'Bedroom' },
				{ id: 'Building', namebuttom: 'Building' },
				{ id: 'Architecture', namebuttom: 'Architecture' },
				{ id: 'Kitchen Planning', namebuttom: 'Kitchen Planning' },
				{ id: 'Bathroom', namebuttom: 'Bathroom' },
			],
		};
	},
	methods: {
		changeArticle(id) {
			this.currentArticle = this.articles.filter((el) => el.id === id);
		},
	},
}
</script>

<style lang="scss" scoped></style>