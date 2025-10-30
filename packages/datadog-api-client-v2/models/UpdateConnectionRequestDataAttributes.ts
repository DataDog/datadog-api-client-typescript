/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CreateConnectionRequestDataAttributesFieldsItems } from "./CreateConnectionRequestDataAttributesFieldsItems";
import { UpdateConnectionRequestDataAttributesFieldsToUpdateItems } from "./UpdateConnectionRequestDataAttributesFieldsToUpdateItems";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

export class UpdateConnectionRequestDataAttributes {
  "fieldsToAdd"?: Array<CreateConnectionRequestDataAttributesFieldsItems>;
  "fieldsToDelete"?: Array<string>;
  "fieldsToUpdate"?: Array<UpdateConnectionRequestDataAttributesFieldsToUpdateItems>;

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
    fieldsToAdd: {
      baseName: "fields_to_add",
      type: "Array<CreateConnectionRequestDataAttributesFieldsItems>",
    },
    fieldsToDelete: {
      baseName: "fields_to_delete",
      type: "Array<string>",
    },
    fieldsToUpdate: {
      baseName: "fields_to_update",
      type: "Array<UpdateConnectionRequestDataAttributesFieldsToUpdateItems>",
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
    return UpdateConnectionRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
