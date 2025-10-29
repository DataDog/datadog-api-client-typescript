/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelSuggestionResponseDataAttributesActionsItems } from "./FunnelSuggestionResponseDataAttributesActionsItems";
import { FunnelSuggestionResponseDataAttributesViewsItems } from "./FunnelSuggestionResponseDataAttributesViewsItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class FunnelSuggestionResponseDataAttributes {
  "actions"?: Array<FunnelSuggestionResponseDataAttributesActionsItems>;
  "views"?: Array<FunnelSuggestionResponseDataAttributesViewsItems>;

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
    actions: {
      baseName: "actions",
      type: "Array<FunnelSuggestionResponseDataAttributesActionsItems>",
    },
    views: {
      baseName: "views",
      type: "Array<FunnelSuggestionResponseDataAttributesViewsItems>",
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
    return FunnelSuggestionResponseDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
