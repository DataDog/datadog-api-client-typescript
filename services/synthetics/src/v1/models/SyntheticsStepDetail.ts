import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBrowserError } from "./SyntheticsBrowserError";
import { SyntheticsBrowserTestResultFailure } from "./SyntheticsBrowserTestResultFailure";
import { SyntheticsCheckType } from "./SyntheticsCheckType";
import { SyntheticsCoreWebVitals } from "./SyntheticsCoreWebVitals";
import { SyntheticsPlayingTab } from "./SyntheticsPlayingTab";
import { SyntheticsStepDetailWarning } from "./SyntheticsStepDetailWarning";
import { SyntheticsStepType } from "./SyntheticsStepType";

/**
 * Object describing a step for a Synthetic test.
 */
export class SyntheticsStepDetail {
  /**
   * Whether or not the step was allowed to fail.
   */
  "allowFailure"?: boolean;
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
   * The browser test failure details.
   */
  "failure"?: SyntheticsBrowserTestResultFailure;
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
    allowFailure: {
      baseName: "allowFailure",
      type: "boolean",
    },
    browserErrors: {
      baseName: "browserErrors",
      type: "Array<SyntheticsBrowserError>",
    },
    checkType: {
      baseName: "checkType",
      type: "SyntheticsCheckType",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    duration: {
      baseName: "duration",
      type: "number",
      format: "double",
    },
    error: {
      baseName: "error",
      type: "string",
    },
    failure: {
      baseName: "failure",
      type: "SyntheticsBrowserTestResultFailure",
    },
    playingTab: {
      baseName: "playingTab",
      type: "SyntheticsPlayingTab",
      format: "int64",
    },
    screenshotBucketKey: {
      baseName: "screenshotBucketKey",
      type: "boolean",
    },
    skipped: {
      baseName: "skipped",
      type: "boolean",
    },
    snapshotBucketKey: {
      baseName: "snapshotBucketKey",
      type: "boolean",
    },
    stepId: {
      baseName: "stepId",
      type: "number",
      format: "int64",
    },
    subTestStepDetails: {
      baseName: "subTestStepDetails",
      type: "Array<SyntheticsStepDetail>",
    },
    timeToInteractive: {
      baseName: "timeToInteractive",
      type: "number",
      format: "double",
    },
    type: {
      baseName: "type",
      type: "SyntheticsStepType",
    },
    url: {
      baseName: "url",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "any",
    },
    vitalsMetrics: {
      baseName: "vitalsMetrics",
      type: "Array<SyntheticsCoreWebVitals>",
    },
    warnings: {
      baseName: "warnings",
      type: "Array<SyntheticsStepDetailWarning>",
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
    return SyntheticsStepDetail.attributeTypeMap;
  }

  public constructor() {}
}
