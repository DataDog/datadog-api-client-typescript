/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateTableRequestDataAttributes } from "./CreateTableRequestDataAttributes";
import { CreateTableRequestDataType } from "./CreateTableRequestDataType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data object containing the table definition.
 */
export class CreateTableRequestData {
  /**
   * Attributes that define the reference table's configuration and properties.
   */
  "attributes"?: CreateTableRequestDataAttributes;
  /**
   * Reference table resource type.
   */
  "type": CreateTableRequestDataType;

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
      type: "CreateTableRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "CreateTableRequestDataType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CreateTableRequestData.attributeTypeMap;
  }

  public constructor() {}
}
