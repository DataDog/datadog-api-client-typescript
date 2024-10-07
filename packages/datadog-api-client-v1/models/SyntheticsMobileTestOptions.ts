/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsMobileTestBinding } from "./SyntheticsMobileTestBinding";
import { SyntheticsMobileTestCiOptions } from "./SyntheticsMobileTestCiOptions";
import { SyntheticsMobileTestOptionsMonitorOptions } from "./SyntheticsMobileTestOptionsMonitorOptions";
import { SyntheticsMobileTestsMobileApplication } from "./SyntheticsMobileTestsMobileApplication";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestOptionsScheduling } from "./SyntheticsTestOptionsScheduling";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the extra options for a Synthetic test.
 */
export class SyntheticsMobileTestOptions {
  /**
   * The `SyntheticsMobileTestOptions` `allowApplicationCrash`.
   */
  "allowApplicationCrash"?: boolean;
  /**
   * Array of bindings used for the mobile test.
   */
  "bindings"?: Array<SyntheticsMobileTestBinding>;
  /**
   * CI/CD options for a Synthetic test.
   */
  "ci"?: SyntheticsMobileTestCiOptions;
  /**
   * The `SyntheticsMobileTestOptions` `defaultStepTimeout`.
   */
  "defaultStepTimeout"?: number;
  /**
   * For mobile test, array with the different device IDs used to run the test.
   */
  "deviceIds"?: Array<string>;
  /**
   * The `SyntheticsMobileTestOptions` `disableAutoAcceptAlert`.
   */
  "disableAutoAcceptAlert"?: boolean;
  /**
   * Minimum amount of time in failure required to trigger an alert.
   */
  "minFailureDuration"?: number;
  /**
   * Mobile application for mobile synthetics test.
   */
  "mobileApplication"?: SyntheticsMobileTestsMobileApplication;
  /**
   * The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.
   */
  "monitorName"?: string;
  /**
   * Object containing the options for a mobile Synthetic test as a monitor
   * (for example, renotification).
   */
  "monitorOptions"?: SyntheticsMobileTestOptionsMonitorOptions;
  /**
   * Integer from 1 (high) to 5 (low) indicating alert severity.
   */
  "monitorPriority"?: number;
  /**
   * The `SyntheticsMobileTestOptions` `noScreenshot`.
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
   * Object containing timeframes and timezone used for advanced scheduling.
   */
  "scheduling"?: SyntheticsTestOptionsScheduling;
  /**
   * The frequency at which to run the Synthetic test (in seconds).
   */
  "tickEvery"?: number;
  /**
   * The `SyntheticsMobileTestOptions` `verbosity`.
   */
  "verbosity"?: number;

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
    allowApplicationCrash: {
      baseName: "allowApplicationCrash",
      type: "boolean",
    },
    bindings: {
      baseName: "bindings",
      type: "Array<SyntheticsMobileTestBinding>",
    },
    ci: {
      baseName: "ci",
      type: "SyntheticsMobileTestCiOptions",
    },
    defaultStepTimeout: {
      baseName: "defaultStepTimeout",
      type: "number",
      format: "int32",
    },
    deviceIds: {
      baseName: "device_ids",
      type: "Array<string>",
    },
    disableAutoAcceptAlert: {
      baseName: "disableAutoAcceptAlert",
      type: "boolean",
    },
    minFailureDuration: {
      baseName: "min_failure_duration",
      type: "number",
      format: "int64",
    },
    mobileApplication: {
      baseName: "mobileApplication",
      type: "SyntheticsMobileTestsMobileApplication",
    },
    monitorName: {
      baseName: "monitor_name",
      type: "string",
    },
    monitorOptions: {
      baseName: "monitor_options",
      type: "SyntheticsMobileTestOptionsMonitorOptions",
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
    scheduling: {
      baseName: "scheduling",
      type: "SyntheticsTestOptionsScheduling",
    },
    tickEvery: {
      baseName: "tick_every",
      type: "number",
      format: "int64",
    },
    verbosity: {
      baseName: "verbosity",
      type: "number",
      format: "int32",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsMobileTestOptions.attributeTypeMap;
  }

  public constructor() {}
}
