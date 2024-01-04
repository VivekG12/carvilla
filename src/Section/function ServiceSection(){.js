export const ServiceSection = {
let obj = [
    {heading: "Largest dealership of car", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia."},
    {heading: "Unlimited", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia."},
    {heading: "Insurance support", content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia."}
]
    return (
        <section id="service" class="service">
			<div class="container">
				<div class="service-content">
					<div class="row">
                        {obj.map((i) => <ServiceCard data={i} />)}
					</div>
				</div>
			</div>
		</section>
    )
    }
function ServiceCard(props){
    
    return(
        <div class="col-md-4 col-sm-6">
            <div class="single-service-item">
                <div class="single-service-icon">
                    <i class="flaticon-car"></i>
                </div>
                <h2><a href="#">{props.data.heading}</a></h2>
                <p>
                    {props.data.content}
                </p>
            </div>
        </div>
    );
}