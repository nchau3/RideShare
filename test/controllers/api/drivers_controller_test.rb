require "test_helper"

class Api::DriversControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_drivers_index_url
    assert_response :success
  end
end
