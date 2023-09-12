/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The metadata relevant to your configuration or recent request.
 */
export class CustomDestinationMetadata {
  /**
   * The amount of custom destinations your organization is able to create.
   */
  "customDestinationsLimit"?: number;
  /**
   * The managed enclave IDs of the resource that is deleted.
   */
  "deletedEnclaveIds"?: Array<string>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customDestinationsLimit: {
      baseName: "customDestinationsLimit",
      type: "number",
      format: "int64",
    },
    deletedEnclaveIds: {
      baseName: "deletedEnclaveIds",
      type: "Array<string>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomDestinationMetadata.attributeTypeMap;
  }

  public constructor() {}
}
