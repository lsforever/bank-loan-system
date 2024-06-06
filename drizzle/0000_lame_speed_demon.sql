CREATE TABLE `loan_guarantee` (
	`loan_number` integer NOT NULL,
	`guarantee_number` integer NOT NULL,
	`name` text,
	`address` text,
	`nic` text,
	`mobile_number` integer,
	`account_number` integer,
	`income` integer,
	`occupation` text,
	`working_place` text,
	PRIMARY KEY(`guarantee_number`, `loan_number`)
);
--> statement-breakpoint
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
