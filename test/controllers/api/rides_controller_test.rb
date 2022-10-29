require "test_helper"

class Api::RidesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_rides_index_url
    assert_response :success
  end
end
