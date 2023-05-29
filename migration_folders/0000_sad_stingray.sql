CREATE TABLE `users` (
	`user_id` varchar(255) PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` varchar(25) NOT NULL,
	`avatar_url` varchar(255) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP);
