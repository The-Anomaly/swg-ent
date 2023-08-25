import React from "react";
import styles from "./styles.module.scss";
import { Button } from "components";
import { useNavigate } from "react-router-dom";
import { Routes } from "router";

export interface TicketProps {
	id: string;
	month: string;
	date: string;
	day: string;
	sun: string;
	time: string;
	venue: string;
	name: string;
	validVenue: boolean;
	available: "open" | "closed" | "none";
	className?: any;
}
const TicketSale: React.FC<TicketProps> = ({
	id,
	month,
	date,
	day,
	sun,
	time,
	venue,
	name,
	available,
	validVenue,
	className,
}) => {
	const navigate = useNavigate();
	return (
		<div className={`${styles.ticket} ${className}`} key={id}>
			<div className={styles.ticket__information}>
				<div className={styles.ticket__information__date}>
					<p>{month}</p>
					<h2>{date}</h2>
				</div>
				<div className={styles.ticket__information__details}>
					<p className={styles.ticket__information__details__day}>
						{day}
						<span>
							<img src={sun} alt="" className={styles.sun} />
						</span>
						{time}
					</p>
					<p className={styles.ticket__information__details__venue}>
						{!validVenue && "Venue TBA -"} {venue}
					</p>
					<p>{name}</p>
				</div>
			</div>
			<Button
				text={available === "open" ? "GET TICKET" : "CLOSED"}
				className={styles.ticketSaleBtn}
				available={available}
				onClick={() =>
					available === "open" ? navigate(Routes.ticketCheckoutId(id)) : ""
				}
			/>
		</div>
	);
};

export { TicketSale };