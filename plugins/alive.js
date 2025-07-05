module.exports = {
  pattern: "alive",
  handler: async (sock, m, { jid }) => {
    await sock.sendMessage(jid, { text: "✅ I am alive bro 👨‍🔧" });
  }
};
