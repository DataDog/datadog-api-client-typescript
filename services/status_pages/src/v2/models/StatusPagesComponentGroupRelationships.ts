import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StatusPagesComponentGroupRelationshipsCreatedByUser } from "./StatusPagesComponentGroupRelationshipsCreatedByUser";
import { StatusPagesComponentGroupRelationshipsGroup } from "./StatusPagesComponentGroupRelationshipsGroup";
import { StatusPagesComponentGroupRelationshipsLastModifiedByUser } from "./StatusPagesComponentGroupRelationshipsLastModifiedByUser";
import { StatusPagesComponentGroupRelationshipsStatusPage } from "./StatusPagesComponentGroupRelationshipsStatusPage";

export class StatusPagesComponentGroupRelationships {
  "createdByUser"?: StatusPagesComponentGroupRelationshipsCreatedByUser;
  "group"?: StatusPagesComponentGroupRelationshipsGroup;
  "lastModifiedByUser"?: StatusPagesComponentGroupRelationshipsLastModifiedByUser;
  "statusPage"?: StatusPagesComponentGroupRelationshipsStatusPage;
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
      type: "StatusPagesComponentGroupRelationshipsCreatedByUser",
    },
    group: {
      baseName: "group",
      type: "StatusPagesComponentGroupRelationshipsGroup",
    },
    lastModifiedByUser: {
      baseName: "last_modified_by_user",
      type: "StatusPagesComponentGroupRelationshipsLastModifiedByUser",
    },
    statusPage: {
      baseName: "status_page",
      type: "StatusPagesComponentGroupRelationshipsStatusPage",
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
    return StatusPagesComponentGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
