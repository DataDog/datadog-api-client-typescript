/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuthSigv4Type } from "./SyntheticsBasicAuthSigv4Type";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to handle `SIGV4` authentication when performing the test.
 */
export class SyntheticsBasicAuthSigv4 {
  /**
   * Access key for the `SIGV4` authentication.
   */
  "accessKey": string;
  /**
   * Region for the `SIGV4` authentication.
   */
  "region"?: string;
  /**
   * Secret key for the `SIGV4` authentication.
   */
  "secretKey": string;
  /**
   * Service name for the `SIGV4` authentication.
   */
  "serviceName"?: string;
  /**
   * Session token for the `SIGV4` authentication.
   */
  "sessionToken"?: string;
  /**
   * The type of authentication to use when performing the test.
   */
  "type": SyntheticsBasicAuthSigv4Type;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    accessKey: {
      type: "string",
      required: true,
    },
    region: {
      type: "string",
    },
    secretKey: {
      type: "string",
      required: true,
    },
    serviceName: {
      type: "string",
    },
    sessionToken: {
      type: "string",
    },
    type: {
      type: "SyntheticsBasicAuthSigv4Type",
      required: true,
    },
  };
}
