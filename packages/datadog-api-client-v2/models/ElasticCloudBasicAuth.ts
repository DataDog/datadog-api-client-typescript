/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudBasicAuthType } from "./ElasticCloudBasicAuthType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Username & password authentication for Elastic Cloud.
 */
export class ElasticCloudBasicAuth {
  /**
   * Password used to authenticate against the deployment.
   */
  "password": string;
  /**
   * Authentication method discriminator.
   */
  "type": ElasticCloudBasicAuthType;
  /**
   * Username used to authenticate against the deployment.
   */
  "username": string;

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
    password: {
      baseName: "password",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ElasticCloudBasicAuthType",
      required: true,
    },
    username: {
      baseName: "username",
      type: "string",
      required: true,
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
    return ElasticCloudBasicAuth.attributeTypeMap;
  }

  public constructor() {}
}
