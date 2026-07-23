/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMOperationStrongLinkResponseData } from "./RUMOperationStrongLinkResponseData";
import { RUMOperationStrongLinksListResponseMeta } from "./RUMOperationStrongLinksListResponseMeta";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The response for a list of RUM operation strong links.
 */
export class RUMOperationStrongLinksListResponse {
  "data": Array<RUMOperationStrongLinkResponseData>;
  /**
   * Metadata for a list of RUM operation strong links.
   */
  "meta"?: RUMOperationStrongLinksListResponseMeta;

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
      type: "Array<RUMOperationStrongLinkResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RUMOperationStrongLinksListResponseMeta",
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
    return RUMOperationStrongLinksListResponse.attributeTypeMap;
  }

  public constructor() {}
}
