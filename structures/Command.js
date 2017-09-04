const { Command } = require('discord.js-commando');

class XiaoCommand extends Command {
	constructor(client, info) {
		super(client, info);

		this.ownerOnly = info.ownerOnly;
		this.throttling = info.throttling || {
			usages: 1,
			duration: 2
		};
	}

	hasPermission(msg) {
		super.hasPermission(msg);
		if (this.ownerOnly && !this.client.isOwner(msg.author)) {
			return `The \`${this.name}\` command can only be used by the bot owner.`;
		}
		return true;
	}
}

module.exports = XiaoCommand;
