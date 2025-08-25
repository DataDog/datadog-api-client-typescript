/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuth } from "./SyntheticsBasicAuth";
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for Continuous Testing.
 */
export class SyntheticsCITest {
  /**
   * Disable certificate checks in API tests.
   */
  "allowInsecureCertificates"?: boolean;
  /**
   * Object to handle basic authentication when performing the test.
   */
  "basicAuth"?: SyntheticsBasicAuth;
  /**
   * Body to include in the test.
   */
  "body"?: string;
  /**
   * Type of the data sent in a Synthetic API test.
   */
  "bodyType"?: string;
  /**
   * Cookies for the request.
   */
  "cookies"?: string;
  /**
   * For browser test, array with the different device IDs used to run the test.
   */
  "deviceIds"?: Array<string>;
  /**
   * For API HTTP test, whether or not the test should follow redirects.
   */
  "followRedirects"?: boolean;
  /**
   * Headers to include when performing the test.
   */
  "headers"?: { [key: string]: string };
  /**
   * Array of locations used to run the test.
   */
  "locations"?: Array<string>;
  /**
   * Metadata for the Synthetic tests run.
   */
  "metadata"?: SyntheticsCIBatchMetadata;
  /**
   * The public ID of the Synthetic test to trigger.
   */
  "publicId": string;
  /**
   * Object describing the retry strategy to apply to a Synthetic test.
   */
  "retry"?: SyntheticsTestOptionsRetry;
  /**
   * Starting URL for the browser test.
   */
  "startUrl"?: string;
  /**
   * Variables to replace in the test.
   */
  "variables"?: { [key: string]: string };

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
    allowInsecureCertificates: {
      baseName: "allowInsecureCertificates",
      type: "boolean",
    },
    basicAuth: {
      baseName: "basicAuth",
      type: "SyntheticsBasicAuth",
    },
    body: {
      baseName: "body",
      type: "string",
    },
    bodyType: {
      baseName: "bodyType",
      type: "string",
    },
    cookies: {
      baseName: "cookies",
      type: "string",
    },
    deviceIds: {
      baseName: "deviceIds",
      type: "Array<string>",
    },
    followRedirects: {
      baseName: "followRedirects",
      type: "boolean",
    },
    headers: {
      baseName: "headers",
      type: "{ [key: string]: string; }",
    },
    locations: {
      baseName: "locations",
      type: "Array<string>",
    },
    metadata: {
      baseName: "metadata",
      type: "SyntheticsCIBatchMetadata",
    },
    publicId: {
      baseName: "public_id",
      type: "string",
      required: true,
    },
    retry: {
      baseName: "retry",
      type: "SyntheticsTestOptionsRetry",
    },
    startUrl: {
      baseName: "startUrl",
      type: "string",
    },
    variables: {
      baseName: "variables",
      type: "{ [key: string]: string; }",
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
    return SyntheticsCITest.attributeTypeMap;
  }

  public constructor() {}
}
