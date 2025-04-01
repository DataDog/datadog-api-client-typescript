/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsApiTestResultFailure } from "./SyntheticsApiTestResultFailure";
import { SyntheticsSSLCertificate } from "./SyntheticsSSLCertificate";
import { SyntheticsTestProcessStatus } from "./SyntheticsTestProcessStatus";
import { SyntheticsTiming } from "./SyntheticsTiming";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object containing results for your Synthetic API test.
*/
export class SyntheticsAPITestResultData {
  /**
   * Object describing the SSL certificate used for a Synthetic test.
  */
  "cert"?: SyntheticsSSLCertificate;
  /**
   * Status of a Synthetic test.
  */
  "eventType"?: SyntheticsTestProcessStatus;
  /**
   * The API test failure details.
  */
  "failure"?: SyntheticsApiTestResultFailure;
  /**
   * The API test HTTP status code.
  */
  "httpStatusCode"?: number;
  /**
   * Request header object used for the API test.
  */
  "requestHeaders"?: { [key: string]: any; };
  /**
   * Response body returned for the API test.
  */
  "responseBody"?: string;
  /**
   * Response headers returned for the API test.
  */
  "responseHeaders"?: { [key: string]: any; };
  /**
   * Global size in byte of the API test response.
  */
  "responseSize"?: number;
  /**
   * Object containing all metrics and their values collected for a Synthetic API test.
   * See the [Synthetic Monitoring Metrics documentation](https://docs.datadoghq.com/synthetics/metrics/).
  */
  "timings"?: SyntheticsTiming;

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
    "cert": {
      "baseName": "cert",
      "type": "SyntheticsSSLCertificate",
    },
    "eventType": {
      "baseName": "eventType",
      "type": "SyntheticsTestProcessStatus",
    },
    "failure": {
      "baseName": "failure",
      "type": "SyntheticsApiTestResultFailure",
    },
    "httpStatusCode": {
      "baseName": "httpStatusCode",
      "type": "number",
      "format": "int64",
    },
    "requestHeaders": {
      "baseName": "requestHeaders",
      "type": "{ [key: string]: any; }",
    },
    "responseBody": {
      "baseName": "responseBody",
      "type": "string",
    },
    "responseHeaders": {
      "baseName": "responseHeaders",
      "type": "{ [key: string]: any; }",
    },
    "responseSize": {
      "baseName": "responseSize",
      "type": "number",
      "format": "int64",
    },
    "timings": {
      "baseName": "timings",
      "type": "SyntheticsTiming",
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




    return SyntheticsAPITestResultData.attributeTypeMap;

  }

  public constructor() {











  }
}









