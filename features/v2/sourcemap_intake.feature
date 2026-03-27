@endpoint(sourcemap-intake) @endpoint(sourcemap-intake-v2)
Feature: Source Map Intake
  Upload source maps, symbol files, and mapping files to Datadog for error
  deobfuscation. This endpoint enables you to upload various types of debug
  symbols for RUM Error Tracking, allowing Datadog to display readable stack
  traces instead of minified or obfuscated code.

  Background:
    Given a valid "apiKeyAuth" key in the system
    And an instance of "RUM" API

  @generated @skip @team:DataDog/rum-backend
  Scenario: Upload source maps returns "Bad Request" response
    Given new "UploadSourceMap" request
    And body with value {"type": "js_sourcemap"}
    When the request is sent
    Then the response status is 400 Bad Request

  @generated @skip @team:DataDog/rum-backend
  Scenario: Upload source maps returns "Unauthorized" response
    Given new "UploadSourceMap" request
    And body with value {"type": "js_sourcemap", "service": "my-web-app", "version": "1.2.3", "minified_url": "https://example.com/static/js/main.min.js"}
    When the request is sent
    Then the response status is 401 Unauthorized

  @integration-only @skip @team:DataDog/rum-backend
  Scenario: Upload JavaScript source map returns "OK" response
    Given new "UploadSourceMap" request
    And request contains "type" parameter with value "js_sourcemap"
    And request contains "service" parameter with value "test-service-{{ unique_hash }}"
    And request contains "version" parameter with value "1.0.0"
    And request contains "minified_url" parameter with value "https://example.com/static/js/main.min.js"
    And request contains "source_map" parameter with file "fixtures/sourcemap_intake/javascript/main.min.js.map"
    And request contains "minified_file" parameter with file "fixtures/sourcemap_intake/javascript/main.min.js"
    When the request is sent
    Then the response status is 200 OK
    And the response "data.type" is equal to "sourcemap_upload"

  @integration-only @skip @team:DataDog/rum-backend
  Scenario: Upload React Native source map returns "OK" response
    Given new "UploadSourceMap" request
    And request contains "type" parameter with value "react_native_sourcemap"
    And request contains "service" parameter with value "test-mobile-{{ unique_hash }}"
    And request contains "version" parameter with value "2.0.0"
    And request contains "platform" parameter with value "ios"
    And request contains "bundle_name" parameter with value "main.jsbundle"
    And request contains "source_map" parameter with file "fixtures/sourcemap_intake/react_native/main.jsbundle.map"
    When the request is sent
    Then the response status is 200 OK
    And the response "data.type" is equal to "sourcemap_upload"

  @integration-only @skip @team:DataDog/rum-backend
  Scenario: Upload JVM mapping file returns "OK" response
    Given new "UploadSourceMap" request
    And request contains "type" parameter with value "jvm_mapping_file"
    And request contains "service" parameter with value "test-android-{{ unique_hash }}"
    And request contains "version" parameter with value "3.0.0"
    And request contains "jvm_mapping_file" parameter with file "fixtures/sourcemap_intake/android/mapping.txt"
    When the request is sent
    Then the response status is 200 OK
    And the response "data.type" is equal to "sourcemap_upload"

  @integration-only @skip @team:DataDog/rum-backend
  Scenario: Upload iOS symbols returns "OK" response
    Given new "UploadSourceMap" request
    And request contains "type" parameter with value "ios_symbols"
    And request contains "uuids" parameter with value "A1B2C3D4-E5F6-7890-ABCD-EF1234567890"
    And request contains "symbols_archive" parameter with file "fixtures/sourcemap_intake/ios/symbols.zip"
    When the request is sent
    Then the response status is 200 OK
    And the response "data.type" is equal to "sourcemap_upload"

  @integration-only @skip @team:DataDog/rum-backend
  Scenario: Upload Flutter symbol file returns "OK" response
    Given new "UploadSourceMap" request
    And request contains "type" parameter with value "flutter_symbol_file"
    And request contains "service" parameter with value "test-flutter-{{ unique_hash }}"
    And request contains "version" parameter with value "1.0.0"
    And request contains "variant" parameter with value "release"
    And request contains "platform" parameter with value "android"
    And request contains "arch" parameter with value "arm64"
    And request contains "flutter_symbol_file" parameter with file "fixtures/sourcemap_intake/flutter/app.symbols"
    When the request is sent
    Then the response status is 200 OK
    And the response "data.type" is equal to "sourcemap_upload"

  @integration-only @skip @team:DataDog/rum-backend
  Scenario: Upload NDK symbol file returns "OK" response
    Given new "UploadSourceMap" request
    And request contains "type" parameter with value "ndk_symbol_file"
    And request contains "build_id" parameter with value "abc123def456"
    And request contains "arch" parameter with value "arm64-v8a"
    And request contains "ndk_symbol_file" parameter with file "fixtures/sourcemap_intake/android/libnative.so"
    When the request is sent
    Then the response status is 200 OK
    And the response "data.type" is equal to "sourcemap_upload"

  @generated @skip @team:DataDog/rum-backend
  Scenario: Upload source maps returns "Payload Too Large" response
    Given new "UploadSourceMap" request
    And body with value {"type": "js_sourcemap", "service": "my-web-app", "version": "1.2.3", "minified_url": "https://example.com/static/js/main.min.js"}
    When the request is sent
    Then the response status is 413 Payload Too Large

  @generated @skip @team:DataDog/rum-backend
  Scenario: Upload source maps returns "Too Many Requests" response
    Given new "UploadSourceMap" request
    And body with value {"type": "js_sourcemap", "service": "my-web-app", "version": "1.2.3", "minified_url": "https://example.com/static/js/main.min.js"}
    When the request is sent
    Then the response status is 429 Too Many Requests
