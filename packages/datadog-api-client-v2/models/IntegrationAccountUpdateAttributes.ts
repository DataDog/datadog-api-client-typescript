/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IntegrationAccountIntegrationUpdate } from "./IntegrationAccountIntegrationUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Updatable attributes of an integration account. Every field is optional; only the fields provided are changed.
 */
export class IntegrationAccountUpdateAttributes {
  /**
   * Strongly-typed, per-integration partial configuration. Exactly one integration variant is set, selected by its `type`.
   */
  "integration"?: IntegrationAccountIntegrationUpdate;
  /**
   * Human-readable name of the account.
   */
  "name"?: string;

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
    integration: {
      baseName: "integration",
      type: "IntegrationAccountIntegrationUpdate",
    },
    name: {
      baseName: "name",
      type: "string",
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
    return IntegrationAccountUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
