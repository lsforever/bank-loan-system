CREATE TABLE `loan` (
	`loan_number` integer PRIMARY KEY NOT NULL,
	`date` text NOT NULL,
	`name` text,
	`address` text,
	`mobile_number` integer,
	`savings_account_number` integer,
	`total_outstanding` integer,
	`total_disbursed` integer,
	`due_amount` integer,
	`product_type` integer,
	`loan_type` text
);
