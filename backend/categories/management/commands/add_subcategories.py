from django.core.management import BaseCommand
from ...models import Category

class Command(BaseCommand):
    help = "Add subcatgories to the database"
    """
    main_sub_map = [
        {"main": ["sub1", "sub2", "sub3"]},
        {"main": ["sub1", "sub2", "sub3"]},
        {"main": ["sub1", "sub2", "sub3"]},
        {"main": ["sub1", "sub2", "sub3"]},
        {"main": ["sub1", "sub2", "sub3"]},
    ]
    """

    def handle(self, *args, **kwargs):


        main_sub_category_map = {
            # Main ==> Sub
            "Arts & Crafts": [
                "Painting, Drawing & Art Supplies",
                "Beading & Jewelry Making",
                "Crafting",
                "Fabric",
                "Fabric Decorating",
                "Knitting & Crochet",
                "Needlework",
                "Organization, Storage & Transport",
                "Printmaking",
                "Scrapbooking & Stamping",
                "Sewing",
                "Party Decorations & Supplies",
                "Gift Wrapping Supplies"
            ],
            "Automotive": [
                "Car Care",
                "Car Electronics & Accessories",
                "Exterior Accessories",
                "Interior Accesories",
                "Lights & Lighting Accessories",
                "Motorcycle & Powersports",
                "Oils and Fluids",
                "Paint and Paint Supplies",
                "Performance Parts & Accessories",
                "Replacement Parts",
                "RV Parts & Accessories",
                "Tires & Wheels",
                "Tools & Equipment",
                "Automotive Enthusiast Merchandise",
                "Heavy Duty and Commercial Vehicle Equipment"
            ],
            "Baby": [
                "Activity & Environment",
                "Apparel & Accessories",
                "Baby & Toddler Toys",
                "Baby Care",
                "Baby Stationery",
                "Car Seats & Accessories",
                "Diapering",
                "Feeding",
                "Gifts",
                "Nursery",
                "Potty Training",
                "Pregnancy & Maternity",
                "Safety",
                "Pregnancy & Maternity",
                "Safety",
                "Strollers & Accessories",
                "Travel Gear"
            ],
            "Beauty and Personal Care": [
                "Makeup",
                "Skin Care",
                "Hair Care",
                "Fragrance",
                "Foot, Hand & Nail Care",
                "Tools & Accessories",
                "Shave & Hair Removal",
                "Personal Care",
                "Oral Care"
            ],
            "Womens' Fashion": [
                "Clothing",
                "Shoes",
                "Jewelry",
                "Watches",
                "Handbags",
                "Accessories"
            ],
            "Men's Fashion": [
                "Clothing",
                "Shoes",
                "Watches",
                "Accessories"
            ],
            "Boys' Fashion": [
                "Clothing",
                "Shoes",
                "Jewelry",
                "Watches",
                "Accessories",
                "School Uniforms"
            ],
            "Health and Household": [
                "Baby & Child Care",
                "Health Care",
                "Household Supplies",
                "Medical Supplies & Equipment",
                "Oral Care",
                "Personal Care",
                "Sexual Wellness",
                "Sports Nutrition",
                "Stationery & Gift Wrapping Supplies",
                "Vision Care",
                "Vitamins & Dietary Supplements",
                "Wellness & Relaxation"
            ],
            "Home and Kitchen": [
                "Kids' Home Store",
                "Kitchen & Dining",
                "Bedding",
                "Bath",
                "Furniture",
                "Home Decor",
                "Wall Art",
                "Lightning & Ceiling Fans",
                "Seasonal Decor",
                "Event & Party Supplies",
                "Heating, Cooling & Air Quality",
                "Irons & Steamers",
                "Vacuums & Floor Care",
                "Storage & Organization",
                "Cleaning Supplies"
            ],
            "Industrial & Scientific": [
                "Abrasive & Finishing Products",
                "Additive Manufacturing Products",
                "Commercial Door Products",
                "Cutting Tools",
                "Fasteners",
                "Filtration",
                "Food Service Equipment & Supplies",
                "Hydraulics, Pneumatics & Plumbing",
                "Industrial Electrical",
                "Industrial Hardware",
                "Industrial Power & Hand Tools",
                "Janitorial & Sanitation Supplies",
                "Lab & Scientific Products",
                "Material Handling Products",
                "Occupational Health & Safety Products",
                "Packaging & Shipping Supplies",
                "Power Transmission Products",
                "Professional Dental Supplies",
                "Professional Medical Supplies",
                "Raw Materials",
                "Retail Store Fixtures & Equipment"
                "Robotics",
                "Science Education",
                "Tapes, Adhesive & Sealants",
                "Test, Measure & Inspect"
            ],
            "Luggage": [
                "Carry-ons",
                "Backpacks",
                "Garment bags",
                "Travel Totes",
                "Luggage Sets",
                "Laptop Bags",
                "Suitcases",
                "Kids Luggage",
                "Messenger Bags",
                "Umbrellas",
                "Duffles",
                "Travel Accessories"
            ],
            "Movies & Television": [
                "Movies",
                "TV Shows",
                "Blu-ray",
                "4K Ultra HD",
                "Best Sellers",
                "Today's Deals",
                "New Releases",
                "Pre-orders",
                "New Releases",
                "Kids & Family",
                "Prime Video",
            ],
            "Pet Supplies": [
                "Dogs",
                "Cats",
                "Fish & Aquatic Pets",
                "Birds",
                "Horses",
                "Reptiles & Amphibians",
                "Small Animals"
            ],
            "Software": [
                "Accouting & Finance",
                "Antivirus & Security",
                "Business & Office",
                "Children's",
                "Design & Illustration",
                "Digital Software",
                "Education & Reference",
                "Games",
                "Lifestyle & Hobbies",
                "Music",
                "Networking & Servers",
                "Operating Systems",
                "Photography",
                "Programming & Web Development",
                "Tax Preparation",
                "Utilities",
                "Video"
            ],
            "Sports & Outdoors": [
                "Sports & Outodoors",
                "Outdoor Recreation",
                "Sports & Fitness"
            ],
            "Tools & Home Improvement": [
                "Tools and Home Improvement",
                "Applaiances",
                "Building Supplies",
                "Electrical",
                "Hardware",
                "Kitchen & Bath Fixtures",
                "Light Bulbs",
                "Lighting & Ceiling Fans",
                "Measuring & Layout Tools",
                "Painting Supplies & Wall Treatments",
                "Power & Hand Tools",
                "Rough Plumbing",
                "Safety & Security",
                "Storage & Home Organization",
                "Welding & Soldering"
            ],
            "Toys and Games": [
                "Action Figures & Statues",
                "Arts & Crafts",
                "Baby & Toddler Toys",
                "Building Toys",
                "Dolls & Accessories",
                "Dress Up & Pretend Play",
                "Kids' Electronics",
                "Games",
                "Grown-Up Toys",
                "Hobbies",
                "Kids' Furniture, Decor & Storage",
                "Learning & Education",
                "Novelty & Gag Toys",
                "Party Supplies",
                "Puppets",
                "Puzzles",
                "Sports & Outdoor Play",
                "Stuffed Animals & Plush Toys",
                "Toy Remote Control & Play Vehicles",
                "Tricycles, Scooters & Wagons",
                "Video Games"
            ],
            "Video Games": [
                "Video Games",
                "PlayStation 4",
                "Playstation 3",
                "Xbox One",
                "Xbox 360",
                "Nintendo Switch",
                "Wii U",
                "Wii",
                "PC",
                "Mac",
                "Nintendo 3DS and 2DS",
                "Nintendo DS",
                "PlayStation Vita",
                "Sony PSP",
                "Retro Gaming & Microconsoles",
                "Accessories",
                "Digital Games",
                "Kids & Family"
            ],
        }


        try:
            for key, value in main_sub_category_map.items():
                parent_category, created = Category.objects.get_or_create(
                    title=key,
                    parent=None
                    )
                for sub_value in value:
                    Category.objects.get_or_create(
                        title=sub_value,
                        parent_id=parent_category.id,
                        )
            self.stdout.write(self.style.SUCCESS('Categories added successfully'))
        except Exception as e:
            print(e)
            print(key, value, parent_category, sep="\n\n")
        
        