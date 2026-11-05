/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AiGatewayModelCatalogEntryResource } from "./AiGatewayModelCatalogEntryResource";
import { AiGatewayProviderResource } from "./AiGatewayProviderResource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing one AI Gateway provider.
 */
export class AiGatewayProviderResponse {
  /**
   * AI Gateway provider resource.
   */
  "data": AiGatewayProviderResource;
  /**
   * Model catalog entries created with the provider.
   */
  "included"?: Array<AiGatewayModelCatalogEntryResource>;

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
      type: "AiGatewayProviderResource",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<AiGatewayModelCatalogEntryResource>",
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
    return AiGatewayProviderResponse.attributeTypeMap;
  }

  public constructor() {}
}
