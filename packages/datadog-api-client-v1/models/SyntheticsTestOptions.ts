/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserTestRumSettings } from "./SyntheticsBrowserTestRumSettings";
import { SyntheticsTestCiOptions } from "./SyntheticsTestCiOptions";
import { SyntheticsTestOptionsHTTPVersion } from "./SyntheticsTestOptionsHTTPVersion";
import { SyntheticsTestOptionsMonitorOptions } from "./SyntheticsTestOptionsMonitorOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestOptionsScheduling } from "./SyntheticsTestOptionsScheduling";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the extra options for a Synthetic test.
 */
export class SyntheticsTestOptions {
  /**
   * For SSL tests, whether or not the test should allow self signed
   * certificates.
   */
  "acceptSelfSigned"?: boolean;
  /**
   * Allows loading insecure content for an HTTP request in an API test.
   */
  "allowInsecure"?: boolean;
  /**
   * Array of URL patterns to block.
   */
  "blockedRequestPatterns"?: Array<string>;
  /**
   * For SSL tests, whether or not the test should fail on revoked certificate in stapled OCSP.
   */
  "checkCertificateRevocation"?: boolean;
  /**
   * CI/CD options for a Synthetic test.
   */
  "ci"?: SyntheticsTestCiOptions;
  /**
   * For browser test, array with the different device IDs used to run the test.
   */
  "deviceIds"?: Array<string>;
  /**
   * For SSL tests, whether or not the test should disable fetching intermediate certificates from AIA.
   */
  "disableAiaIntermediateFetching"?: boolean;
  /**
   * Whether or not to disable CORS mechanism.
   */
  "disableCors"?: boolean;
  /**
   * Disable Content Security Policy for browser tests.
   */
  "disableCsp"?: boolean;
  /**
   * Enable profiling for browser tests.
   */
  "enableProfiling"?: boolean;
  /**
   * Enable security testing for browser tests. Security testing is not available anymore. This field is deprecated and won't be used.
   */
  "enableSecurityTesting"?: boolean;
  /**
   * For API HTTP test, whether or not the test should follow redirects.
   */
  "followRedirects"?: boolean;
  /**
   * HTTP version to use for a Synthetic test.
   */
  "httpVersion"?: SyntheticsTestOptionsHTTPVersion;
  /**
   * Ignore server certificate error for browser tests.
   */
  "ignoreServerCertificateError"?: boolean;
  /**
   * Timeout before declaring the initial step as failed (in seconds) for browser tests.
   */
  "initialNavigationTimeout"?: number;
  /**
   * Minimum amount of time in failure required to trigger an alert.
   */
  "minFailureDuration"?: number;
  /**
   * Minimum number of locations in failure required to trigger
   * an alert.
   */
  "minLocationFailed"?: number;
  /**
   * The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.
   */
  "monitorName"?: string;
  /**
   * Object containing the options for a Synthetic test as a monitor
   * (for example, renotification).
   */
  "monitorOptions"?: SyntheticsTestOptionsMonitorOptions;
  /**
   * Integer from 1 (high) to 5 (low) indicating alert severity.
   */
  "monitorPriority"?: number;
  /**
   * Prevents saving screenshots of the steps.
   */
  "noScreenshot"?: boolean;
  /**
   * A list of role identifiers that can be pulled from the Roles API, for restricting read and write access.
   */
  "restrictedRoles"?: Array<string>;
  /**
   * Object describing the retry strategy to apply to a Synthetic test.
   */
  "retry"?: SyntheticsTestOptionsRetry;
  /**
   * The RUM data collection settings for the Synthetic browser test.
   * **Note:** There are 3 ways to format RUM settings:
   *
   * `{ isEnabled: false }`
   * RUM data is not collected.
   *
   * `{ isEnabled: true }`
   * RUM data is collected from the Synthetic test's default application.
   *
   * `{ isEnabled: true, applicationId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", clientTokenId: 12345 }`
   * RUM data is collected using the specified application.
   */
  "rumSettings"?: SyntheticsBrowserTestRumSettings;
  /**
   * Object containing timeframes and timezone used for advanced scheduling.
   */
  "scheduling"?: SyntheticsTestOptionsScheduling;
  /**
   * The frequency at which to run the Synthetic test (in seconds).
   */
  "tickEvery"?: number;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    acceptSelfSigned: {
      baseName: "accept_self_signed",
      type: "boolean",
    },
    allowInsecure: {
      baseName: "allow_insecure",
      type: "boolean",
    },
    blockedRequestPatterns: {
      baseName: "blockedRequestPatterns",
      type: "Array<string>",
    },
    checkCertificateRevocation: {
      baseName: "checkCertificateRevocation",
      type: "boolean",
    },
    ci: {
      baseName: "ci",
      type: "SyntheticsTestCiOptions",
    },
    deviceIds: {
      baseName: "device_ids",
      type: "Array<string>",
    },
    disableAiaIntermediateFetching: {
      baseName: "disableAiaIntermediateFetching",
      type: "boolean",
    },
    disableCors: {
      baseName: "disableCors",
      type: "boolean",
    },
    disableCsp: {
      baseName: "disableCsp",
      type: "boolean",
    },
    enableProfiling: {
      baseName: "enableProfiling",
      type: "boolean",
    },
    enableSecurityTesting: {
      baseName: "enableSecurityTesting",
      type: "boolean",
    },
    followRedirects: {
      baseName: "follow_redirects",
      type: "boolean",
    },
    httpVersion: {
      baseName: "httpVersion",
      type: "SyntheticsTestOptionsHTTPVersion",
    },
    ignoreServerCertificateError: {
      baseName: "ignoreServerCertificateError",
      type: "boolean",
    },
    initialNavigationTimeout: {
      baseName: "initialNavigationTimeout",
      type: "number",
      format: "int64",
    },
    minFailureDuration: {
      baseName: "min_failure_duration",
      type: "number",
      format: "int64",
    },
    minLocationFailed: {
      baseName: "min_location_failed",
      type: "number",
      format: "int64",
    },
    monitorName: {
      baseName: "monitor_name",
      type: "string",
    },
    monitorOptions: {
      baseName: "monitor_options",
      type: "SyntheticsTestOptionsMonitorOptions",
    },
    monitorPriority: {
      baseName: "monitor_priority",
      type: "number",
      format: "int32",
    },
    noScreenshot: {
      baseName: "noScreenshot",
      type: "boolean",
    },
    restrictedRoles: {
      baseName: "restricted_roles",
      type: "Array<string>",
    },
    retry: {
      baseName: "retry",
      type: "SyntheticsTestOptionsRetry",
    },
    rumSettings: {
      baseName: "rumSettings",
      type: "SyntheticsBrowserTestRumSettings",
    },
    scheduling: {
      baseName: "scheduling",
      type: "SyntheticsTestOptionsScheduling",
    },
    tickEvery: {
      baseName: "tick_every",
      type: "number",
      format: "int64",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsTestOptions.attributeTypeMap;
  }

  public constructor() {}
}
