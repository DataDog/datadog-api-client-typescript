/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ConfluentAccountResponseAttributes } from "./ConfluentAccountResponseAttributes";
import { ConfluentAccountType } from "./ConfluentAccountType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An API key and API secret pair that represents a Confluent account.
 */
export class ConfluentAccountResponseData {
  /**
   * The attributes of a Confluent account.
   */
  "attributes": ConfluentAccountResponseAttributes;
  /**
   * A randomly generated ID associated with a Confluent account.
   */
  "id": string;
  /**
   * The JSON:API type for this API. Should always be `confluent-cloud-accounts`.
   */
  "type": ConfluentAccountType;

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
      type: "ConfluentAccountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ConfluentAccountType",
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
    return ConfluentAccountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
