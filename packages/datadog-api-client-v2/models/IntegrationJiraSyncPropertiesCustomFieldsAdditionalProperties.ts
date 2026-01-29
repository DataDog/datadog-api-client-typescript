/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AnyValue } from "./AnyValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties {
  "syncType"?: string;
  /**
   * Represents any valid JSON value.
   */
  "value"?: AnyValue;

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
    syncType: {
      baseName: "sync_type",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "AnyValue",
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
    return IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties.attributeTypeMap;
  }

  public constructor() {}
}
