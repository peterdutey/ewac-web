require 'bundler/setup'
require 'rubygems'
require 'minitest/autorun'
require 'selenium-webdriver'

class GoogleTest < MiniTest::Test
  USERNAME = ENV['BROWSERSTACK_USERNAME'] || ''
  BROWSERSTACK_ACCESS_KEY = ENV['BROWSERSTACK_ACCESS_KEY'] || ''

  def setup
    if USERNAME == ''
      puts 'Please add BROWSERSTACK_USERNAME & BROWSERSTACK_ACCESS_KEY to environment or in this file'
      exit
    end
    url = "https://#{USERNAME}:#{BROWSERSTACK_ACCESS_KEY}@hub.browserstack.com/wd/hub"
    capabilities = Selenium::WebDriver::Remote::Capabilities.new
    capabilities['browserstack.local'] = true
    capabilities['browserstack.localIdentifier'] = ENV['BROWSERSTACK_LOCAL_IDENTIFIER']
    capabilities['os'] = ENV['BS_AUTOMATE_OS']
    capabilities['os_version'] = ENV['BS_AUTOMATE_OS_VERSION']
    capabilities['browser'] = ENV['SELENIUM_BROWSER']
    capabilities['browser_version'] = ENV['SELENIUM_VERSION']
    capabilities['build'] = __FILE__
    @driver = Selenium::WebDriver.for(:remote,
                                      url: url,
                                      desired_capabilities: capabilities)
  end

  def test_post
    @driver.navigate.to 'https://www.google.com/ncr'
    element = @driver.find_element(:name, 'q')
    element.send_keys 'BrowserStack'
    element.submit
    assert_equal(@driver.title, 'BrowserStack - Google Search')
  end

  def test_parallel
    @driver.navigate.to 'http://localhost:4000/questionnaire/'
    @driver.find_element(:css, ".btn-start > .btn").click
    @driver.find_element(:css, "#audit1 > .btn-group:nth-child(2) > .btn").click
    @driver.find_element(:css, "#audit2 > .btn-group:nth-child(3) > .btn").click
    @driver.find_element(:css, "#audit3 > .btn-group:nth-child(2) > .btn").click
    element ewac_result_units = @driver.find_element(:class, "results_ukunits")
    assert_equal(ewac_result_units.text, "1 - 5")
  end

  def teardown
    @driver.quit
  end
end
