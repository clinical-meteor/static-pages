describe('clinical:static-pages', function () {
  var server = meteor();
  var client = browser(server);

  it('Static pages exist on client.', function () {
    return client.execute(function () {

      expect(Template.aboutPage).to.exist();
      expect(Template.eulaPage).to.exist();
      expect(Template.faqPage).to.exist();
      expect(Template.marketingPage).to.exist();
      expect(Template.privacyPage).to.exist();
      expect(Template.supportPage).to.exist();
    });
  });
});
