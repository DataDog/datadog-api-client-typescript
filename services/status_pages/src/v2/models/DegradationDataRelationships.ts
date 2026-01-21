import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DegradationDataRelationshipsCreatedByUser } from "./DegradationDataRelationshipsCreatedByUser";
import { DegradationDataRelationshipsLastModifiedByUser } from "./DegradationDataRelationshipsLastModifiedByUser";
import { DegradationDataRelationshipsStatusPage } from "./DegradationDataRelationshipsStatusPage";

/**
 * The relationships of a degradation.
 */
export class DegradationDataRelationships {
  "createdByUser"?: DegradationDataRelationshipsCreatedByUser;
  "lastModifiedByUser"?: DegradationDataRelationshipsLastModifiedByUser;
  "statusPage"?: DegradationDataRelationshipsStatusPage;
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
    createdByUser: {
      baseName: "created_by_user",
      type: "DegradationDataRelationshipsCreatedByUser",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "DegradationDataRelationshipsLastModifiedByUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "DegradationDataRelationshipsStatusPage",
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
    return DegradationDataRelationships.attributeTypeMap;
  }

  public constructor() {}
}
