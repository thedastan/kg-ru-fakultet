import React from "react";
import { media } from "../../media";

const Hero = () => {
	return (
		<section
			id="hero"
			style={{
				paddingTop: media(0, 70),
				backgroundImage:
					"url('https://thediplomat.com/wp-content/uploads/2022/03/sizes/td-story-s-2/thediplomat_2022-03-14-141243.jpg')",
			}}>
			<div
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					textAlign: "center",
					background: "#00abb47c",
					height: "92vh",
					position: "absolute",
					top: "0px",
				}}>
				<div className="container">
					<div className="hero-general">
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<h1
								className="hero-general__title"
								style={{
									fontSize: media(60, 45),
									marginBottom: media(20, 60),
								}}>
								Кыргыз-Россия факультети
							</h1>
							<p
								className="hero-general__desc"
								style={{ fontSize: media(15, 20) }}>
								Филологиялык билим берүүдө заманбап квалификациялуу адистерди
								даярдоо аркылуу улуттун маданий мурасын сактоо жана өнүктүрүү.
							</p>

							<a href="#onas" className="hero-general__block">
								<div />
								<h1>Биздин факультетибиз</h1>
								<span>
									<i className="fa-solid fa-arrow-right-long" />
								</span>
							</a>
						</div>
						<div>
							{/* <img src={home} alt="img" className="hero-general__img"/> */}
						</div>
						<a
							style={{ display: "flex", justifyContent: "center" }}
							href="#info">
							<button
								className="hero-general__btn"
								style={{
									width: media(200, 343),
									fontSize: media(18, 23),
									height: media(50, 65),
								}}>
								Биздин факультет
							</button>
						</a>
					</div>
					<div id="onas" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
