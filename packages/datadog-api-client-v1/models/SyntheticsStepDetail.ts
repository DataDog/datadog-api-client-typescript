/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserError } from "./SyntheticsBrowserError";
import { SyntheticsCheckType } from "./SyntheticsCheckType";
import { SyntheticsCoreWebVitals } from "./SyntheticsCoreWebVitals";
import { SyntheticsPlayingTab } from "./SyntheticsPlayingTab";
import { SyntheticsStepDetailWarning } from "./SyntheticsStepDetailWarning";
import { SyntheticsStepType } from "./SyntheticsStepType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing a step for a Synthetic test.
 */
export class SyntheticsStepDetail {
  /**
   * Array of errors collected for a browser test.
   */
  "browserErrors"?: Array<SyntheticsBrowserError>;
  /**
   * Type of assertion to apply in an API test.
   */
  "checkType"?: SyntheticsCheckType;
  /**
   * Description of the test.
   */
  "description"?: string;
  /**
   * Total duration in millisecond of the test.
   */
  "duration"?: number;
  /**
   * Error returned by the test.
   */
  "error"?: string;
  /**
   * Navigate between different tabs for your browser test.
   */
  "playingTab"?: SyntheticsPlayingTab;
  /**
   * Whether or not screenshots where collected by the test.
   */
  "screenshotBucketKey"?: boolean;
  /**
   * Whether or not to skip this step.
   */
  "skipped"?: boolean;
  /**
   * Whether or not snapshots where collected by the test.
   */
  "snapshotBucketKey"?: boolean;
  /**
   * The step ID.
   */
  "stepId"?: number;
  /**
   * If this step includes a sub-test.
   * [Subtests documentation](https://docs.datadoghq.com/synthetics/browser_tests/advanced_options/#subtests).
   */
  "subTestStepDetails"?: Array<SyntheticsStepDetail>;
  /**
   * Time before starting the step.
   */
  "timeToInteractive"?: number;
  /**
   * Step type used in your Synthetic test.
   */
  "type"?: SyntheticsStepType;
  /**
   * URL to perform the step against.
   */
  "url"?: string;
  /**
   * Value for the step.
   */
  "value"?: any;
  /**
   * Array of Core Web Vitals metrics for the step.
   */
  "vitalsMetrics"?: Array<SyntheticsCoreWebVitals>;
  /**
   * Warning collected that didn't failed the step.
   */
  "warnings"?: Array<SyntheticsStepDetailWarning>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    browserErrors: {
      type: "Array<SyntheticsBrowserError>",
    },
    checkType: {
      type: "SyntheticsCheckType",
    },
    description: {
      type: "string",
    },
    duration: {
      type: "number",
      format: "double",
    },
    error: {
      type: "string",
    },
    playingTab: {
      type: "SyntheticsPlayingTab",
      format: "int64",
    },
    screenshotBucketKey: {
      type: "boolean",
    },
    skipped: {
      type: "boolean",
    },
    snapshotBucketKey: {
      type: "boolean",
    },
    stepId: {
      type: "number",
      format: "int64",
    },
    subTestStepDetails: {
      type: "Array<SyntheticsStepDetail>",
    },
    timeToInteractive: {
      type: "number",
      format: "double",
    },
    type: {
      type: "SyntheticsStepType",
    },
    url: {
      type: "string",
    },
    value: {
      type: "any",
    },
    vitalsMetrics: {
      type: "Array<SyntheticsCoreWebVitals>",
    },
    warnings: {
      type: "Array<SyntheticsStepDetailWarning>",
    },
  };
}
