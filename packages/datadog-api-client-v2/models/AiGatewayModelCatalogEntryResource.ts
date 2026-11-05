/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelCatalogEntryAttributes } from "./AiGatewayModelCatalogEntryAttributes";
import { AiGatewayModelCatalogEntryType } from "./AiGatewayModelCatalogEntryType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * AI Gateway model catalog entry resource.
 */
export class AiGatewayModelCatalogEntryResource {
  /**
   * Model catalog entry configuration and metadata.
   */
  "attributes": AiGatewayModelCatalogEntryAttributes;
  /**
   * Resource identifier.
   */
  "id": string;
  /**
   * Model catalog entry resource type.
   */
  "type": AiGatewayModelCatalogEntryType;

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
    attributes: {
      baseName: "attributes",
      type: "AiGatewayModelCatalogEntryAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AiGatewayModelCatalogEntryType",
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
    return AiGatewayModelCatalogEntryResource.attributeTypeMap;
  }

  public constructor() {}
}
