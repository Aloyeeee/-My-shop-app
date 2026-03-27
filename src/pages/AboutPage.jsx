const AboutPage = () => {
   return (
     <div style={{ padding: '3rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
       <h2>Про застосунок MyShop</h2>
       <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginTop: '1rem' }}>
         Цей інтернет-магазин розроблений у рамках лабораторних робіт з React. 
         Він демонструє роботу зі станами, хуками useEffect, локальним сховищем, 
         асинхронними запитами до API та клієнтською маршрутизацією!
       </p>
     </div>
   );
 };
 
 export default AboutPage;