/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ElasticCloudCcmAccountUpdateData } from "./ElasticCloudCcmAccountUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request payload to update an Elastic Cloud CCM account as a partial merge.
 */
export class ElasticCloudCcmAccountUpdateRequest {
  /**
   * Data envelope for updating an Elastic Cloud CCM account.
   */
  "data": ElasticCloudCcmAccountUpdateData;

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
    data: {
      baseName: "data",
      type: "ElasticCloudCcmAccountUpdateData",
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
    return ElasticCloudCcmAccountUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
