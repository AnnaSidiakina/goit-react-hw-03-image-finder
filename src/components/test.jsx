// export default class App extends Component {
//   state = {
//     imageGallery: null,
//     loading: false,
//   };
//   componentDidMount() {
//     fetch(
//       'https://pixabay.com/api/?q=cat&page=1&key=29502904-bb8b76f5b0eb667a79f07b05e&image_type=photo&orientation=horizontal&per_page=12'
//     )
//       .then(res => res.json())
//       .then(imageGallery => this.setState({ imageGallery }))
//       .finally(() => this.setState({ loading: false }));
//   }
//   render() {
//     return (
//       <div>
//         {this.state.loading && <p>loading...</p>}
//         <ul>
//           {this.state.imageGallery &&
//             this.state.imageGallery.hits.map(hit => (
//               <li key={hit.id}>
//                 <img src={hit.webformatURL}></img>
//               </li>
//             ))}
//         </ul>
//       </div>
//     );
//   }
// }
