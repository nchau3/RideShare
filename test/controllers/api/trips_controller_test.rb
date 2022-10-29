require "test_helper"

class Api::TripsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_trips_index_url
    assert_response :success
  end
end
