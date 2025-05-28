/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsDeviceID } from "./SyntheticsDeviceID";
import { SyntheticsMobileTestsMobileApplication } from "./SyntheticsMobileTestsMobileApplication";
import { SyntheticsRestrictedRolesItem } from "./SyntheticsRestrictedRolesItem";
import { SyntheticsTestCiOptions } from "./SyntheticsTestCiOptions";
import { SyntheticsTestOptionsMonitorOptions } from "./SyntheticsTestOptionsMonitorOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestOptionsScheduling } from "./SyntheticsTestOptionsScheduling";
import { SyntheticsTestRestrictionPolicyBinding } from "./SyntheticsTestRestrictionPolicyBinding";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object describing the extra options for a Synthetic test.
*/
export class SyntheticsMobileTestOptions {
  /**
   * A boolean to set if an application crash would mark the test as failed.
  */
  "allowApplicationCrash"?: boolean;
  /**
   * Array of bindings used for the mobile test.
  */
  "bindings"?: Array<SyntheticsTestRestrictionPolicyBinding>;
  /**
   * CI/CD options for a Synthetic test.
  */
  "ci"?: SyntheticsTestCiOptions;
  /**
   * The default timeout for steps in the test (in seconds).
  */
  "defaultStepTimeout"?: number;
  /**
   * For mobile test, array with the different device IDs used to run the test.
  */
  "deviceIds": Array<string>;
  /**
   * A boolean to disable auto accepting alerts.
  */
  "disableAutoAcceptAlert"?: boolean;
  /**
   * Minimum amount of time in failure required to trigger an alert.
  */
  "minFailureDuration"?: number;
  /**
   * Mobile application for mobile synthetics test.
  */
  "mobileApplication": SyntheticsMobileTestsMobileApplication;
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
   * A boolean set to not take a screenshot for the step.
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
  "tickEvery": number;
  /**
   * The level of verbosity for the mobile test. This field can not be set by a user.
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
    "allowApplicationCrash": {
      "baseName": "allowApplicationCrash",
      "type": "boolean",
    },
    "bindings": {
      "baseName": "bindings",
      "type": "Array<SyntheticsTestRestrictionPolicyBinding>",
    },
    "ci": {
      "baseName": "ci",
      "type": "SyntheticsTestCiOptions",
    },
    "defaultStepTimeout": {
      "baseName": "defaultStepTimeout",
      "type": "number",
      "format": "int32",
    },
    "deviceIds": {
      "baseName": "device_ids",
      "type": "Array<string>",
      "required": true,
    },
    "disableAutoAcceptAlert": {
      "baseName": "disableAutoAcceptAlert",
      "type": "boolean",
    },
    "minFailureDuration": {
      "baseName": "min_failure_duration",
      "type": "number",
      "format": "int64",
    },
    "mobileApplication": {
      "baseName": "mobileApplication",
      "type": "SyntheticsMobileTestsMobileApplication",
      "required": true,
    },
    "monitorName": {
      "baseName": "monitor_name",
      "type": "string",
    },
    "monitorOptions": {
      "baseName": "monitor_options",
      "type": "SyntheticsTestOptionsMonitorOptions",
    },
    "monitorPriority": {
      "baseName": "monitor_priority",
      "type": "number",
      "format": "int32",
    },
    "noScreenshot": {
      "baseName": "noScreenshot",
      "type": "boolean",
    },
    "restrictedRoles": {
      "baseName": "restricted_roles",
      "type": "Array<string>",
    },
    "retry": {
      "baseName": "retry",
      "type": "SyntheticsTestOptionsRetry",
    },
    "scheduling": {
      "baseName": "scheduling",
      "type": "SyntheticsTestOptionsScheduling",
    },
    "tickEvery": {
      "baseName": "tick_every",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "verbosity": {
      "baseName": "verbosity",
      "type": "number",
      "format": "int32",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return SyntheticsMobileTestOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









