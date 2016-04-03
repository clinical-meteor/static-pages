describe('clinical:static-pages', function () {
  var server = meteor();
  var client = browser(server);

  it('About page exist on client.', function () {
    return client.execute(function () {
      expect(Template.aboutPage).to.exist();
    });
  });
  it('License Agreement page exist on client.', function () {
    return client.execute(function () {
      expect(Template.eulaPage).to.exist();
    });
  });
  it('Marketing page exist on client.', function () {
    return client.execute(function () {
      expect(Template.marketingPage).to.exist();
    });
  });
  it('Privacy page exist on client.', function () {
    return client.execute(function () {
      expect(Template.privacyPage).to.exist();
    });
  });
  it('Support page exist on client.', function () {
    return client.execute(function () {
      expect(Template.supportPage).to.exist();
    });
  });

});
